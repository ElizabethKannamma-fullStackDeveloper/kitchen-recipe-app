const express=require("express");
const connectDB=require("../BackEnd/Database");
require("dotenv").config();
connectDB();

const authRoutes=require('../BackEnd/Routes/authRoutes')
const recipeRoutes=require("../BackEnd/Routes/recipeRoutes")
const categoryRoutes=require("../BackEnd/Routes/categoryRoutes")

const app=express();
app.use(express.json());

//CORS middleware
const cors=require("cors");
app.use(cors());
app.use("/auth",authRoutes);
app.use("/recipe",recipeRoutes);
app.use('/category',categoryRoutes)



const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{console.log(`server connected to port ${PORT}`)});

app.get('/', (req, res) => res.send(`
<div>
<p>Because my rendor app couldn't able to connect to mongoDB compass.please use this link to check details  </p>
<p>To get all Recipes List - <a>https://recipe-1.onrender.com/recipe/recipes<a> </p>
<br>
<p>To get Recipe based on ID  - https://recipe-1.onrender.com/recipe/65ba72a09c103f248258b089</p>
<br>
<p>To get Recipe based on category(veg) - https://recipe-1.onrender.com/category/veg<p>
<br>
<p>To get Recipe based on category(non-veg) - https://recipe-1.onrender.com/category/non-veg<p>
<br>
<p>To get Recipe based on category(baked) - https://recipe-1.onrender.com/category/baked </p>
<br>
<p>To get Recipe based on category(grilled) - https://recipe-1.onrender.com/category/grilled </p>
<br>
<p>To get Recipe based on category(chilled) - https://recipe-1.onrender.com/category/chilled </p>
<br>



`))