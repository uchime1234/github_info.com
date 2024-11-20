


interface props { //note that with props u can pass into different components, u can do so by using {} 

    Items: string[],
    Heading: string


}

function Listing({Items, Heading}: props) {
    
   
    
    return(
  <>
  <h1>{Heading}</h1>
  {Items.map((Items) => {
   <li className="border">{Items}</li>
  })}
  </>


    )

}

export default Listing