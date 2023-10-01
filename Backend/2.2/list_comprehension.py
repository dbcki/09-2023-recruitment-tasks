users = [
    {"name": "Kamil", "country": "Poland"}, 
    {"name": "John", "country": "USA"}, 
    {"name": "Yeti"}
]

filter_key = "country"
filter_value = "Poland"

users_filtered = [user for user in users if user.get(filter_key) == filter_value]