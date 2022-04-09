// This file contains fetch/GET access to the Dashboard Server for the purpose of hitting app-external APIs

const serverURL: string = "https://agile-refuge-37723.herokuapp.com/api/v1";
//const databaseURL: string = "http://localhost:3100/api/v1/";

// Mediastack API random news fetch:
export async function getNews(url = `${serverURL}/news`) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //'Content-Type': 'application/x-www-form-urlencoded'
      },
    });
    console.log("News Fetch Res:", response.json);
    return response.json();
  } catch (error: any) {
    if (error) return error.message;
  }
}
