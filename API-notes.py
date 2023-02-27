# API stands for Application Programming Interface
#   useful for communication between different software systems by 
#   facilitating data exchange (using requests and responses) between 
#   systems located in different remote places.

# An API endpoint is the touchpoint of communication to an API that is interacting
#   with another system. Each endpoint is the location from which APIs can access
#   the resources they need to carry out their function.

# Consuming an API in Python
# The browser/client makes an HTTP request via the code in the VIEW function / CBV
# The data returned from the API may be optionally processed/shaped/trimmed and/or 
#   combined with other data.
# The desired data can be saved to the database and/or passed to a template 
#   to be rendered
# Typically, Python developers use Python's requests library to send HTTP requests


# Guide to Add a Feature to a Web App

# 1) IDENTIFY THE ROUTE
#       - use RESTful routing if possible (GET, POST, EDIT, DELETE)
#       - REST stands for Representational State Transfer. 
#       - RESTful routes are a conventional way to map HTTP Methods/Verbs 
#           (GET, POST, PUT, DELETE) to CRUD actions (create, reade, update, delete)
#       - e.g. AAU, when I click on a post on the posts index page, I want to see a
#           details page for the specific post I clicked on
#           - method: GET, path: /posts/:id
#           - view function or CBV: show

# 2) CREATE THE UI (the UI that asks for the request, not the UI that responds to the request)
#       - use a form or hyperlink
#       - 
