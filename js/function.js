function getHeader(){
    const header =document.querySelector('header');
    const i =document.createElement("i")
    i.className= "fa-solid fa-martini-glass-citrus"
    header.appendChild(i)
    let h1 =document.createElement("h1")
    h1.textContent="GretaDrink"
    header.appendChild(h1)
    const nav = document.createElement("nav");
    let a =document.createElement("a")
    a.setAttribute("href","./index.html")
    a.textContent="index"
    nav.appendChild(a)
    a =document.createElement("a")
    a.setAttribute("href","./random.html")
    a.textContent="random"
    nav.appendChild(a)
    a =document.createElement("a")
    a.setAttribute("href","./alcolic.html")
    a.textContent="alcolic"
    nav.appendChild(a)
    header.appendChild(nav)
}
function getFooter(){
    const footer =document.querySelector('footer');
    const nom = document.createElement("span")
    nom.textContent="Achard"
    const prenom = document.createElement("span")
    prenom.textContent="Morgan"
    footer.appendChild(nom)
    footer.appendChild(prenom)
}
async function getData(url) {
    try{
        const reponse = await fetch(url);
        const data =await reponse.json();
        return data;
    }catch(e){
        console.error("error",e);
    }  
}
async function getRandomCocktail(){
    let data = await getData("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    let i =1;
    console.log(data);
    console.log(data.drinks[0]["strAlcoholic"]);
    console.log(data.drinks[0].strCategory);
    console.log(data.drinks[0].strDrink);
    console.log(data.drinks[0].strDrinkThumb);
    console.log(data.drinks[0].strInstructions);
    console.log(data.drinks[0].strGlass);
    while(data.drinks[0][`strIngredient${i}`]!=null){
        console.log(data.drinks[0][`strIngredient${i}`]);
        console.log(data.drinks[0][`strMeasure${i}`]);
        i++;
    }
}
getHeader();
getFooter();
getRandomCocktail();