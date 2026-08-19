---
layout: ../../layouts/BlogLayout.astro
title: "Go BattleShip Server"
description: "BattleShip game server built in Go"
pubDate: "Aug 13 2026"
heroImage: "/gopher_ship.webp"
badge: ""
author: 'Stephen Donlin'
---

## Battleship Clone in Go

GitHub: [Go BattleShip Server](https://github.com/sdonlin5/go-battleship-server.git)

Over the course of 8 weeks, I developd the server component of a multi-player clone of the board game Battleship written in Go. The project was a class assignment that allowed for the students to define their own project, I chose this project because I was interested in learning how multi-player games are able to maintain multiple concurrent matches with low latency and to gain exposure to the Go programming language. Although I chose the presentation layer of a game, the architecture is broadly applicable and used as the backbone of other applications.

 Although there was not enough time to complete the work on a Swift application for user interaction, work on the application has continued.


References:
- [Gorilla Websocket](https://github.com/gorilla/websocket/tree/main)
- [Chat example](https://github.com/gorilla/websocket/tree/main/examples/chat)
- [GoByExample.com](https://gobyexample.com)
- [Go Documentation](https://go.dev/doc/)
