import React from 'react';
import img1 from '../../sql_nosql.png'
import img2 from '../../JWT.jpg'
import img3 from '../../javascript-vs-nodejs.jpg'
import img4 from '../../nodejs-requests.png'

const Blog = () => {
    return (
        <div className='my-5'>
            <div className='md:flex border border-b-4 border-cyan-500 my-4'>
                <div className='p-4 md:w-1/2 my-auto'><img src={img1} className="rounded-2xl" alt="" /></div>
                <div className='p-4 md:w-1/2'>
                    <h2 className='text-3xl text-justify'>What is the difference between SQL and NoSQL?</h2>
                    <p className='text-justify'>When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision.
                        Here, we break down the most important distinctions and discuss the best SQL and NoSQL database systems available.
                        The five critical differences between SQL vs NoSQL are:
                        <ol className='list-item font-semibold list-inside'>
                            <li>* SQL databases are relational, NoSQL databases are non-relational.</li>
                            <li>* SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                            <li>* SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                            <li>* SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                            <li>* SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                        </ol>

                    </p>
                </div>
            </div>
            <div className='md:flex border border-b-4 border-cyan-500 my-4'>
                <div className='p-4 md:w-1/2 my-auto'><img src={img2} className="rounded-2xl" alt="" /></div>
                <div className='p-4 md:w-1/2'>
                    <h2 className='text-3xl text-justify'>What Is JWT and how does it works?</h2>
                    <p className='text-justify'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                        Once decoded, you will get two JSON strings:
                        <br />
                        * The header and the payload. <br />
                        * The signature. <br />
                        * The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. <br />

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                    </p>
                </div>
            </div>
            <div className='md:flex border border-b-4 border-cyan-500 my-4'>
                <div className='p-4 md:w-1/2 my-auto'><img src={img3} className="rounded-2xl" alt="" /></div>
                <div className='p-4 md:w-1/2'>
                    <h2 className='text-3xl text-justify'>What is the difference between Node.js and JavaScript?</h2>
                    <p className='text-justify'>
                        Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins. <br />

                        1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                        As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. <br />

                        2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. <br />

                        3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. <br />


                        Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.
                    </p>
                </div>
            </div>
            <div className='md:flex border border-b-4 border-cyan-500 my-4'>
                <div className='p-4 md:w-1/2 my-auto'><img src={img4} className="rounded-2xl" alt="" /></div>
                <div className='p-4 md:w-1/2'>
                    <h2 className='text-3xl'>How does NodeJS handle multiple requests at the same time?</h2>
                    <p className='text-justify'>Given a NodeJS application, since Node is single threaded, say if processing involves a Promise.all that takes 8 seconds, does this mean that the client request that comes after this request would need to wait for eight seconds?
                        No. NodeJS event loop is single threaded. The entire server architecture for NodeJS is not single threaded.

                        Before getting into the Node server architecture, to take a look at typical multithreaded request response model, the web server would have multiple threads and when concurrent requests get to the webserver, the webserver picks threadOne from the threadPool and threadOne processes requestOne and responds to clientOne and when the second request comes in, the web server picks up the second thread from the threadPool and picks up requestTwo and processes it and responds to clientTwo. threadOne is responsible for all kinds of operations that requestOne demanded including doing any blocking IO operations.

                        The fact that the thread needs to wait for blocking IO operations is what makes it inefficient. With this kind of a model, the webserver is only able to serve as much requests as there are threads in the thread pool.
                        How is NodeJS better than traditional multithreaded request response model?
                        With traditional multithreaded request/response model, every client gets a different thread where as with NodeJS, the simpler request are all handled directly by the EventLoop. This is an optimization of thread pool resources and there is no overhead of creating the threads for every client request.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;