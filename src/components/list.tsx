

function Lists() {

const items = ["Nigeria", "Tokyo", "equitorial gueaine", "Ghana", "South africa", "Niger"]

const grable = []


    return (
//note that u cannpt have multiple parent element in ur code in react 
        <> {/*this is a fragment, which is a react feature*/}
        <h1>Lists</h1>
        {grable.length === 0 && <p>no items found</p>} {/*with this peice of code u dont have to use a false and true statement, just the true statement, mostly used by react devs*/}
<ul className="list-none">
 {items.map((items, index) => (
    <li className="border" key={items} onClick={() => {console.log(items, index)}}>{items}</li>
 ))}  {/* in order to write a little bit of javascript code u need to use a curly braces and wrap it in a div */}
</ul>



</>


    )
    
    
    
  
}

export default Lists;