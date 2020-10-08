
export async function getArticles(){
    let response = await fetch("http://0870.vozhzhaev.ru/getArticles");
    let articles = await response.json();
    return articles;
}