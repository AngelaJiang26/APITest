/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
	CloudFlareTest:'CloudFlareTest';
}

export default {
    async fetch(request, env, ctx) {
        try {
            const value = await env.CloudFlareTest.get("general_data");

            if (value === null) {
                return new Response("Value not found", {status: 404});
            }
            return new Response(value);
        }
        catch (e)
        {
            return new Response(e.message, {status: 500});
        }
    },
};


/*

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {

  try {
	await env.YOUR_KV_NAMESPACE.put("KEY", "VALUE");
	const value = await env.YOUR_KV_NAMESPACE.get("KEY");
	if (value === null) {
	  return new Response("Value not found", { status: 404 });
	  }
	return new Response(value);
  } catch (err) {
	// In a production application, you could instead choose to retry your KV
	// read or fall back to a default code path.
	console.error(`KV returned error: ${err}`)
	return new Response(err, { status: 500 })
  }
  },
};*/