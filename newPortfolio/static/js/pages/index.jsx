class Slides extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        var slides=this.props.slides.map((s,index)=>{
            return <Slide slide={s} key={index.toString()}/>
        })
        return (
            <div className="slides">
                {slides}
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
            <div className="slide">
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
const headerSlides=[
    {title:"Web Developer",short:"I am a web developer",ctActionLink:"./projects",ctActionTtitle:"My Projects",img:"./static/images/"}
]

ReactDOM.render(<Slides slides={headerSlides}/>,document.getElementById('slides'))