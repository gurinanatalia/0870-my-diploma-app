
export async function getArticles(){
    let response = await fetch("http://site2.gurinavw.beget.tech/getArticles");
    let articles = await response.json();
    return articles;
}