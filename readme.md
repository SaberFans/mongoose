Raspberry Pi Data Rendering
============================
## To run:
node server.js
## Data Visualization
The socket.io subscribes the data updates from database, draw it on the chats.
To access, go to http://YOUR_IP:8000
### Data Service Store Top Level Structure


    .
    ├── api                             # Data Store Service
    │   ├── controllers                 # Data store controller
    │   └── models                      # mongoDB model schema 
    │   └── routes                      # Data Store service rest api routes
    ├── pi                              # 
    │   └── dht.py                      # Raspberry Pi DHT sensor reading
    ├── data_loader.py                  # XLSX data loader
    ├── house_price_per_year.xlsx       # house price local dataset
    ├── package.json                    # nodejs packages
    └── README.md
