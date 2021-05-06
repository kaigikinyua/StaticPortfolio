class Slides extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        var slides=this.props.slides.map((s,index)=>{
            return <Slide slide={s} key={index.toString()} id={index.toString()}/>
        })
        return (
            <div>
                <div className="slides">
                    {slides}
                </div>
                {<SlideControll slides={this.props.slides}/>}
            </div>
        )
    }
}

class Slide extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return(
            <div className="slide" id={this.props.id}>
                <div className="card_text">    
                    <h1 className="superTitle">{this.props.slide.title}</h1>
                    <p>{this.props.slide.short}</p>
                    <a href={this.props.ctActionLink}>
                        <button className="call_to_action">{this.props.slide.ctActionTtitle}</button>
                    </a>
                </div>
                <div className="image">
                    <img src={this.props.slide.img}/>
                </div>
            </div>
        )
    }
}
class SlideControll extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        var buttons=this.props.slides.map((slide,index)=>{
            return <a href={"#"+index}><div className='sliderButton'></div></a>
        });
        return(
            <div className='slideControll'>
                {buttons}
            </div>
        )
    }
}

const headerSlides=[
    {title:"Web Developer",short:"Web development is my main professional focus.",ctActionLink:"./projects",ctActionTtitle:"My Projects",img:"./static/images/"},
    {title:"3D Graphic Designer",short:"3D Graphic Designer",ctActionLink:"./projects",ctActionTtitle:"My Projects",img:"./static/images/"},

]

ReactDOM.render(<Slides slides={headerSlides}/>,document.getElementById('slides'))