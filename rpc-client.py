import rpyc

SERVER = "localhost"
PORT = "12345"

class Client:
    def __init__(self):
        conn = rpyc.connect(SERVER, PORT)
        conn.root.exposed_append(2)
        conn.root.exposed_append(4)

        print(conn.root.exposed_value())


if __name__ == "__main__":
    Client()
