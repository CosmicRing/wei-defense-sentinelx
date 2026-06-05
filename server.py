from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class MoonPartyHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".js": "application/javascript; charset=utf-8",
        ".mjs": "application/javascript; charset=utf-8",
        ".json": "application/json; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".svg": "image/svg+xml",
        ".png": "image/png",
        ".webp": "image/webp",
    }


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", 4173), MoonPartyHandler)
    print("Moon Party server: http://127.0.0.1:4173/")
    server.serve_forever()
