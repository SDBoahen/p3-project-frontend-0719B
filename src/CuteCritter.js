function CuteCritter(props){
    console.log(props)
    // <CuteCritter key={eachCuteCritter.id} cuteCritterProp={eachCuteCritter} /> 


    //// js

        const whoIsThis =()=>{ console.log("CRITTER") }

    //// js


    return(<>
    
        <h3>{props.cuteCritterProp.name}</h3>
        <img src={"https://banner2.cleanpng.com/20180608/wlq/kisspng-wubbzy-coloring-book-television-show-character-wubbzy-5b1b1f2865c777.4776092315285041044169.jpg"} alt={props.cuteCritterProp.name} 
            onClick={whoIsThis}
        />
    
    </>)


}
export default CuteCritter