const tickets={template: `
<!--'<h1>This is Tickets Page</h1>'-->


<div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
    Add Ticket
</button>

</div>



<table class="table table-striped">
<thead>
    <tr>
        <th>
            ticket_id
        </th>
        <th>
            ticket_code
        </th>
        <th>
            ticket_date
        </th>
        <th>
            total_amount
        </th>
        <th>
            options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="t in tickets">
        <td>{{t.ticket_id}}</td>
        <td>{{t.ticket_code}}</td>
        <td>{{t.ticket_date}}</td>
        <td>{{t.total_amount}}</td>
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

            <button type="button" @click="deleteClick(t.ticket_id)"
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
            <span class="input-group-text">Ticket Date</span>
            <input type="text" class="form-control" v-model="ticket_date">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text">Total Amount</span>
            <input type="text" class="form-control" v-model="total_amount">
        </div>

        <button type="button" @click="createClick()"
        v-if="ticket_id==0" class="btn btn-primary">
        Create
        </button>

        <button type="button" @click="updateClick()"
        v-if="ticket_id!=0" class="btn btn-primary">
        Update
        </button>

    </div>

</div>
</div>
</div>



<!--
/*
ticket_id = models.AutoField(primary_key=True) #SERIAL
    ticket_code = models.CharField(max_length=30) #VARCHAR(30)
    ticket_date = models.DateField() #DATE DEFAULT NULL
    total_amount = models.IntegerField() #NUMERIC
*/-->


`,

data(){
    return{
        tickets:[],
        ticket_id:0,
        modalTitle:"",
        ticket_code:"",
        ticket_date:"",
        total_amount:0.00
    }
},

methods:{
    refreshData(){
        axios.get(variables.API_URL+"tickets")
        .then((response)=>{
            this.tickets=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Ticket";
        this.ticket_id=0;
        this.ticket_code="";
        this.ticket_date="";
        this.total_amount=0;
    },
    editClick(t){
        this.modalTitle="Edit Ticket";
        this.ticket_id=t.ticket_id;
        this.ticket_code=t.ticket_code;
        this.ticket_date=t.ticket_date;
        this.total_amount=t.total_amount;
    },
    createClick(){
        axios.post(variables.API_URL+"tickets",{
            ticket_code:this.ticket_code,
            ticket_date:this.ticket_date,
            total_amount:this.total_amount
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        })
        .catch((error) => console.log(error));
        
    },
    updateClick(){
        axios.put(variables.API_URL+"tickets",{
            ticket_id:this.ticket_id,
            ticket_code:this.ticket_code,
            ticket_date:this.ticket_date,
            total_amount:this.total_amount
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
        axios.delete(variables.API_URL+"tickets/"+id)
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