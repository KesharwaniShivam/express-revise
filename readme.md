1. To serve static files (like images, videos , and any file) we can do in "public" folder and use EXPRESS.STATIC(here will provide path)

and this is basically a MIDDLEWARE so we use APP.USE() 

we have to provide path of PUBLIC folder so we can use , app.resolve() [for current path] and app.join [ to join the public folder path]

and this files are now publicly available , so we can access throungh broswer 
