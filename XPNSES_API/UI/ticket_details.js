const ticket_details={template: `


<!--'<h1>This is Tickets Details Page</h1>'-->


<div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
    Add Ticket Details
</button>

</div>



<table class="table table-striped">
<thead>
    <tr>
        <th>
            ticket_details_id
        </th>
        <th>
            ticket_code
        </th>
        <th>
            article_code
        </th>
        <th>
            article_name
        </th>
        <th>
            article_quantity
        </th>
        <th>
            article_unit_price
        </th>
        <th>
            article_vat
        </th>
        <th>
            options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="t in ticket_details">
        <td>{{t.ticket_details_id}}</td>
        <td>{{t.ticket_code}}</td>
        <td>{{t.article_code}}</td>
        <td>{{t.article_name}}</td>
        <td>{{t.article_quantity}}</td>
        <td>{{t.article_unit_price}}</td>
        <td>{{t.article_vat}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(t)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>

            <button type="button" @click="deleteClick(t.ticket_details_id)"
            class="btn btn-light mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                </svg>
            </button>
        </td>
    </tr>

</tbody>
</table>

<div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-lg modal-dialog-centered">
<div class="modal-content">
    <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{modalTitle}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
    </div>

    <div class="modal-body">

        <div class="input-group mb-3">
            <span class="input-group-text">Ticket Code</span>
            <input type="text" class="form-control" v-model="ticket_code">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text">Article Code</span>
            <input type="text" class="form-control" v-model="article_code">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text">Article Name</span>
            <input type="text" class="form-control" v-model="article_name">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text">Article Quantity</span>
            <input type="text" class="form-control" v-model="article_quantity">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text">Article Unit Price</span>
            <input type="text" class="form-control" v-model="article_unit_price">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text">Article Vat</span>
            <input type="text" class="form-control" v-model="article_vat">
        </div>

        <button type="button" @click="createClick()"
        v-if="ticket_details_id==0" class="btn btn-primary">
        Create
        </button>

        <button type="button" @click="updateClick()"
        v-if="ticket_details_id!=0" class="btn btn-primary">
        Update
        </button>

    </div>

</div>
</div>
</div>



<!--
/*
class Ticket_details(models.Model):
    ticket_details_id = models.AutoField(primary_key=True) #SERIAL
    ticket_code = models.CharField(max_length=30) #VARCHAR(30)
    article_code = models.IntegerField() #INTEGER
    article_name = models.CharField(max_length=30) #VARCHAR(30) NOT NULL
    article_quantity = models.FloatField() #DECIMAL NOT NULL
    article_unit_price = models.FloatField() #DECIMAL NOT NULL
    article_vat = models.FloatField() # DECIMAL NOT NULL
    # pk_ticket_details = models.
    #CONSTRAINT pk_ticket_details PRIMARY KEY(ticket_details_id)
*/ /*-->


`,

data(){
    return{
        ticket_details:[],
        ticket_details_id:0,
        modalTitle:"",
        ticket_code:"",
        article_code:0,
        article_name:"",
        article_quantity:0.00,
        article_unit_price:0.00,
        article_vat:0.00
        
    }
},

methods:{
    refreshData(){
        axios.get(variables.API_URL+"ticket_details")
        .then((response)=>{
            this.ticket_details=response.data;
        })
        .catch((error) => console.log(error));

    },
    addClick(){
        this.modalTitle="Add Ticket Details";
        this.ticket_details_id=0;
        this.ticket_code="";
        this.article_code=0;
        this.article_name="";
        this.article_quantity=0.00;
        this.article_unit_price=0.00;
        this.article_vat=0.00;

    },
    editClick(t){
        this.modalTitle="Edit Ticket Details";
        this.ticket_details_id=t.ticket_details_id;
        this.ticket_code=t.ticket_code;
        this.article_code=t.article_code;
        this.article_name=t.article_name;
        this.article_quantity=t.article_quantity;
        this.article_unit_price=t.article_unit_price;
        this.article_vat=t.article_vat;
      

    },
    createClick(){
        axios.post(variables.API_URL+"ticket_details",{
            ticket_details:this.ticket_details,
            ticket_code:this.ticket_code,
            article_code:this.article_code,
            article_name:this.article_name,
            article_quantity:this.article_quantity,
            article_unit_price:this.article_unit_price,
            article_vat:this.article_vat

        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        })
        .catch((error) => console.log(error));
        
    },
    updateClick(){
        axios.put(variables.API_URL+"ticket_details",{
            ticket_details_id:this.ticket_details_id,
            ticket_code:this.ticket_code,
            article_code:this.article_code,
            article_name:this.article_name,
            article_quantity:this.article_quantity,
            article_unit_price:this.article_unit_price,
            article_vat:this.article_vat

        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        })
        .catch((error) => console.log(error));
    },

    deleteClick(id){

        if(!confirm("Are you sure?")){
            return;
        }
        axios.delete(variables.API_URL+"ticket_details/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        })
        .catch((error)=>console.log(error));
    
    }

}, /*Cierra "methods" */


mounted:function(){
    this.refreshData();
}

}  /* Cierra "template", linea 1 de todo el file */