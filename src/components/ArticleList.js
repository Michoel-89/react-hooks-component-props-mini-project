import Article from "./Article"
function ArticleList({posts}) {

    return (
        <main>{posts.map((element, index) => {
            console.log(element.preview, element)
            return < Article key={index} title={element.title} date={element.date} preview={element.preview}/>
        })}</main>
    )
}

export default ArticleList