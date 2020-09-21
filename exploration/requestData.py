import requests

if __name__ == "__main__":
    url = "https://fantasy.premierleague.com/api/bootstrap-static/"

    r = requests.get(url)
    r.encoding = "utf-8"
    print(r.encoding)
    
    with open("./data.json", "w") as f:
        f.write(r.content.decode("cp1252"))
    print("Done!")
