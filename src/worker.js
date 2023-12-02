addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event.request));
  });
//const csv = ;
const myInfo = {
  name: 'Buyun (Angela) Jiang',
  homepage: 'https://www.linkedin.com/in/buyun-jiang/',
  githubURL: 'https://github.com/AngelaJiang26/',
  interestingFact: 'I speak 3 different languages and have drivers license from 4 different countries. I also love rockclimbing.',
  skills: ['Java', 'Python', 'MySQL', 'C', 'React.js', 'Flask']
};

async function handleRequest(request) {
    // API Endpoint #1: GET /organization-chart
    if (request.method === 'GET' && new URL(request.url).pathname === '/organization-chart') {
        /*
        const ACCOUNT_ID = "012544cd5b8eee151cddddfb3957e644";
        const API_TOKEN = "hhc4dcLvXSJv64h-HcHyE1PuSYgCfjKusq4wOFFa";

        // Replace with your KV namespace ID (KID) and key
        const KID = "a69efbae24984a67aefe7e3f523cff37";
        const KEY = "here";

        // Construct the KV URL 
        const kvUrl = `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${KID}/values/${KEY}`;
        // Make a request to Cloudflare API
        const response = await fetch(kvUrl, {
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${API_TOKEN}`,
            },});
        const data = await response.json();
        return new Response(data.result.value);

        */
        //const kv = await KVNamespace.create(kvNamespace);
        const key = "general_data";
        const value = await CloudFlareTest.get(key);
        if (value === null) {
            return new Response("Value not found", {status: 404});
        }
        //const infoText = JSON.stringify(myInfo);
        return new Response(value);
    } 

    // API Endpoint #2: GET /me
    if (request.method === 'GET' && new URL(request.url).pathname === '/me') {
        const infoText = JSON.stringify(myInfo);
        return new Response(infoText);
      } 



    else {
      return new Response('Not Found', { status: 404 });
    }
}

// API Endpoint #2: GET /me
/*async function handleRequest(request) {
    if (request.method === 'GET' && new URL(request.url).pathname === '/me') {
      const infoText = JSON.stringify(myInfo);
      return new Response(infoText);
    } 
    else {
      return new Response('Not Found', { status: 404 });
    }
  }*/