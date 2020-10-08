import React from 'react';

const BlogItem = (props)=>{
    return <div className="col-md-6 col-lg-4 mb-5">
        <div className="media-image">
            <img src={`images/${props.img}`} alt="Image" className="img-fluid"/>
            <div className="media-image-body">
                <h2 className="font-secondary text-uppercase">{props.title}</h2>
                <span className="d-block mb-3">By {props.author} &mdash; {props.date}</span>
                <p>{props.description}</p>
                <p><a href="https://www.instagram.com/olegmks/?hl=ru">Перейти в блог</a></p>
            </div>
        </div>
    </div>
}

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {blogItems: []};
    }
    componentDidMount() {
        this.props.getArticles().then(
            articles=>{
                let articlesCount = articles.length;
                let blogItems = [];
                for (let i = 0; i < articlesCount; i++) {
                    blogItems.push(<BlogItem
                        key={i}
                        title={articles[i].title}
                        author={articles[i].author}
                        date={articles[i].date}
                        description={articles[i].description}
                        img={articles[i].img}
                    />)
                }
                this.setState({blogItems: blogItems})
            }
        )
    }
    render() {
        return <div className="site-section">
            <div className="container">
                <div className="row mb-5">
                    {this.state.blogItems}
                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <div className="custom-pagination">
                            <span className="current">1</span>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <span>...</span>
                            <a href="#">14</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Blog;