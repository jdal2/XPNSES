const products={template: `
<!--'<h1>This is Products Page</h1>'-->


<div>

<button type="button"
class="btn btn-primary m-2 fload-end"
data-bs-toggle="modal"
data-bs-target="#exampleModal"
@click="addClick()">
    Add Product
</button>

</div>



<table class="table table-striped">
<thead>
    <tr>
        <th>
            product_id
        </th>
        <th>
            product_name
        </th>
        <th>
            product_category
        </th>
        <th>
            product_brand
        </th>
        <th>
            options
        </th>
    </tr>
</thead>
<tbody>
    <tr v-for="prod in products">
        <td>{{prod.product_id}}</td>
        <td>{{prod.product_name}}</td>
        <td>{{prod.product_category}}</td>
        <td>{{prod.product_brand}}</td>
        <td>
            <button type="button"
            class="btn btn-light mr-1"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="editClick(prod)">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
            </button>

            <button type="button" @click="deleteClick(prod.product_id)"
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
            <span class="input-group-text">Product Name</span>
            <input type="text" class="form-control" v-model="product_name">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text">Product Category</span>
            <input type="text" class="form-control" v-model="product_category">
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text">Product Brand</span>
            <input type="text" class="form-control" v-model="product_brand">
        </div>

        <button type="button" @click="createClick()"
        v-if="product_id==0" class="btn btn-primary">
        Create
        </button>

        <button type="button" @click="updateClick()"
        v-if="product_id!=0" class="btn btn-primary">
        Update
        </button>

    </div>

</div>
</div>
</div>







<!--
/*product_id = models.AutoField(primary_key=True) #SERIAL
    product_name = models.CharField(max_length=30) #VARCHAR(30) NOT NULL
    product_category = models.CharField(max_length=30) #VARCHAR(30)
    product_brand = models.CharField(max_length=30) #VARCHAR(30)
*/-->



`,

data(){
    return{
        products:[],
        modalTitle: "",
        product_id:0,
        product_name:"",
        product_category:"",
        product_brand:""
    }
},

methods:{
    refreshData(){
        axios.get(variables.API_URL+"products")
        .then((response)=>{
            this.products=response.data;
        });
    },
    addClick(){
        this.modalTitle="Add Product";
        this.product_id=0;
        this.product_name="";
        this.product_category="";
        this.product_brand="";
    },
    editClick(prod){
        this.modalTitle="Edit Product";
        this.product_id=prod.product_id;
        this.product_name=prod.product_name;
        this.product_category=prod.product_category;
        this.product_brand=prod.product_brand;
    },
    createClick(){
        axios.post(variables.API_URL+"products",{
            product_name:this.product_name,
            product_category:this.product_category,
            product_brand:this.product_brand
        })
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        })
        .catch((error) => console.log(error));
        
    },
    updateClick(){
        axios.put(variables.API_URL+"products",{
            product_id:this.product_id,
            product_name:this.product_name,
            product_category:this.product_category,
            product_brand:this.product_brand
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
        axios.delete(variables.API_URL+"products/"+id)
        .then((response)=>{
            this.refreshData();
            alert(response.data);
        })
        .catch((error)=>console.log(error));
    }

},

mounted:function(){
    this.refreshData();
}


}