const root = ReactDOM.createRoot(document.getElementById('myreactdiv'));

class ShoppingClassComp extends React.Component{
    
        render(){
            const {items} = this.props;
            const listItems = items.map((item) =>
                <li key={item}>{item}</li>
            )
            return(
                <div>
                    <h1 className="text-center m-5 bg-primary text-white rounded-3">
                        Welcome to My Shopping List Page
                    </h1>
                    <ol>
                        <h2 className="mx-5">{listItems}</h2>
                    </ol>
                </div>
            )
        }
    }



const items = ['apple','egg','milk','juice','salad'];
root.render(<ShoppingClassComp items={items}/>);