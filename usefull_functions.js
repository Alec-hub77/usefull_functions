
//************************* */  React search **********************************************//
// import JSONData;

const JSONData = [
    {
        "id": "1",
        "title": "title1"
    }
]
const [searchTerm, setSearchTerm] = React.useState('')



<input type="text" onchange={(e) => setSearchTerm(e.target.value)} />

JSONData.filter((val) => {
    if(searchTerm == "") {
        return val;
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
    }
} ).map((item) => (
    return 
        (<div key={item.id}>{item.title}</div>)
))

// **************************************************************************************//