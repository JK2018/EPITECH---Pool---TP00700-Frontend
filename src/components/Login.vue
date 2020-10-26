<template>
    <div>
        
        <div class="maindiv">


            <div class="card" style="width: 30%; height: 100%">
                <img class="card-img-top" src="../assets/TMlogo4.jpg" alt="Card image cap">
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"><br>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>

                        <button style="margin-right: 2%;" type="submit" class="btn btn-primary">Log-in</button>
                        <button type="submit" class="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
            
        </div>



        
 
    </div>
</template>




<script>

export default {
    name: 'login',
    data(){
        return{

        }
    }
    
}
</script>



<style>
    .card{
        margin: auto;
        width: 30%;
        height: 50%;
        border: solid white;
        background-color: white; 
        border-radius: 10px;

    }
    .card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
    border-radius: 10px;
    }
    .form-control{
        border-radius: 5px;
        height: 30px;
        margin-top: 2%;
        border: 1px grey solid;
        position: relative;
        width: 98%
    }
    .maindiv{
        position: relative;
        margin-top: 12%;
        height: 350px;
        
    }
    button.btn.btn-primary{
        width: 49%;
        margin-top: 2%;
        border-radius: 5px;
        height: 35px;
        border: 1px grey solid;
    }
</style>