We have implemented crud using nodejs and ejs
crud stands for :
C- Create (we used post request)
R- Read (we used get request)
U- Update (we used patch request)
D- Delete / Destroy (we used a delete request)

Now generally , the html forms do not natively support any request apart from get and post request
so to used the update and delete request , we installed a node pakage called "method-override"
and using that we created a query string "\_method" and this is then added in the action argument of the form
followed by the type of request we need ( for example patch or delete) and then we also need a curesponding patch or delete route in the main index.js

index.js is the main file on which the node or nodemon runs and creates the server
we first require all the necessary pakcages,that are express , UUID(to create unique ids) , path and finally
method_override

To actually use express , we create and object for it,called as app , and then all express methods are
used by it.

app.listen is used to listen to the server , which is created on the given port number,here 3030
