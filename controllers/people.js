const { people } = require('../data');


let getPeople =(req,res)=>{
    res.status(200).json({success:true,data:people})
}
let createPerson =(req,res)=>{
    let {name}=req.body

    if(!name){
        return res.status(404).json({success:false,msg:'please provide name value'})
    }


    res.status(201).json({success:true,person:name})
}

let createPersonPostman =(req,res)=>{
    let{name}=req.body
    if(!name){
        return res.status(404).json({success:false,msg:'please provide name value'})
    }


    res.status(201).json({success:true,person:[...people,name]})
}

let updatePerson = (req, res) => {
    let {id}=req.params
    let {name}=req.body
   let person =people.find((person)=>person.id===Number(id))

   if(!person){
       return res.status(404).json({success:false,msg: `no person with id: ${id} `})
   }
        let newPeople = people.map((person)=>{
            if(person.id=== Number(id)){
                person.name=name
            }
            return person
        })
        res.status(200).json({success:true,data:newPeople})
        console.log(id,name)
}

let deletePerson =(req,res)=>{
    let person =people.find((person)=>person.id===Number(req.params.id))

    if(!person){
        return res.status(404).json({success:false,msg: `no person with id: ${req.params.id} `})
    }

let newPeople =people.filter((person)=> person.id !== Number(req.params.id))
        return res.status(200).json({success:true,data:newPeople})

}


module.exports=
{
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
}