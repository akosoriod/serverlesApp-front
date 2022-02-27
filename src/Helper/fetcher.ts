export async function fetcher(url: RequestInfo) {
    try {
      const res = await fetch(url);
      const json = await res.json();
      console.log("json: ", json);
      return json;
    } catch (e) {
      throw e;
    }
  }
  
