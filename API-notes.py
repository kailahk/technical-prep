# API stands for Application Programming Interface
#   useful for communication between different software systems by 
#   facilitating data exchange (using requests and responses) between 
#   systems located in different remote places.

# An API endpoint is the touchpoint of communication to an API that is interacting
#   with another system. Each endpoint is the location from which APIs can access
#   the resources they need to carry out their function.

# Consuming an API in Python
#   - The user clicks the UI that triggers an HTTP request to the server
#   - The browser/client makes an HTTP request via the code in the VIEW function / CBV
# The data returned from the API may be optionally processed/shaped/trimmed and/or 
#   combined with other data.
# The desired data can be saved to the database and/or passed to a template 
#   to be rendered
# Typically, Python developers use Python's requests library to send HTTP requests


# Guide to Add a Feature to a Web App

# 1) IDENTIFY THE METHOD, PATH, & CORRESPONDING VIEW FUNCTION
#       - use RESTful routing if possible (GET, POST, EDIT, DELETE), based on the user story or goal of the feature
#       - REST stands for Representational State Transfer. 
#       - RESTful routes are a conventional way to map HTTP Methods/Verbs 
#           (GET, POST, PUT, DELETE) to CRUD actions (create, reade, update, delete)
#       - e.g. view all posts
#           - method: GET, path: /posts ==> view function or CBV: index
#       - e.g. view specific post
#           - method: GET, path: /posts/:id ==> view function or CBV: show
#       - e.g. create a post
#           - method: POST, path: /posts ==> view function or CBV: create
#       - e.g. update a post
#           - method: PUT, path: /posts/:id ==> view function or CBV: update
#       - e.g. delete a post
#           - method: DELETE, path: /posts/:id ==> view function or CBV: delete


# 2) CREATE THE UI (the UI that asks for the request, not the UI that responds to the request)
#       - in Django, this happens in the main_app/templates folder
#       - use a form or hyperlink
#       - e.g. hyperlink:
#           - {% for post in posts %}
#               <a href="/posts/{{ post.id }}">
#                   <h1>{{post.title}}</h1>
#                   <img src="post-image-url" alt="{{post.description}}">
#               </a>
#             {% endfor %}


#  3) DEFINE THE ROUTE on the server that matches the HTTP request
#       - in Django, this is written in the main_app/urls.py component
#       - use the route from step 1 as the path, 
#       - e.g. route to view a specific post
#           from django.urls import path
#           from . import views
#           
#           urlpatterns = [
#               path('/posts/<int:post_id>/', views.posts_detail, name='detail')
#           ]


#  4) CODE THE VIEW FUNCTION or CBV
#       - in Django, this is done in main_app/views.py, which was imported in the file above
#       - these functions are responsible for performing CRUD and providing data to templates if necessary.
#       - e.g. posts_detail view function
#           from django.shortcuts import render, redirect
#           
#           def posts_detail(request, post_id):
#               post = Post.objects.get(id=post_id)
#               return render(request, 'posts/detail.html', {
#                   'post': post
#               })


#  5) RESPOND TO THE CLIENT'S HTTP REQUEST (UI)
#       - if the above view function renders a template, code that template at the correct path provided after the req object above
#       - if the view function redirects, which is typical with create/update/delete methods, path doesn't contain '.html' but refers to same file


