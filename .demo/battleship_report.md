# Introduction & Background
With this project I wanted to learn something that was outside of my comfort zone and

For this project my goal was to implement an online, turn based clone of the classic board game Battleship. With this project I wanted to take on a challenge that was outside of my comfort zone,  using tools and technologies that were new to me, and had application to the job market in 2026. 


While brainstorming ideas for what to work on I thought about what I personally wanted to learn more about and wanted more exposure to beyond what has been covered in the in the post-bacc program. One of the things that I have always taken for granted is that I can turn on a video game console, open a game, and jump into a match with someone on the other side of the globe. The open ended nature of this project gave me a perfect opportunity to gain practical experience developing a system for real-time communication between multiple clients, mediated by a server that manages the state of a game. 


The architecture needed to deliver this project is broadly applicable and serves as the fundamental principle behind any application where multiple parties interact with shared data. 



Any board game could have been used for this project but Battleship was chosen as the presentation layer for it’s simple mechanics and visuals, allowing me to focus on the broader architecture. 



Although I had no experience with it, I chose to use the Go programming language because of its widespread industry adoption, built-in concurrency features, readable syntax, and standard toolset. 



For the user facing application I chose to build a desktop application for MacOS using Swift, SwiftUI, and SpriteKit. I landed on this stack because I wanted to avoid using a game engine like Unity or Godot did not want to build a custom engine from components using a low-level framework like SFML. In researching SpriteKit I found it to be a middle ground with all of the necessary features for simple 2D graphics and animation. The trade-off in this decision was that the final product would be limited to the Apple ecosystem.

# Methodology, Materials, and Methods
I primarily used materials found online including the official Go documentation, GoByExample.com, GoWebExamples.com, and StackOverflow.com. The examples from the Gorilla web toolkit (https://github.com/gorilla) was also a valuable resource when designing the system.

To avoid “analysis paralysis” I immediately started writing code once I settled on an idea and received feedback on the proposal. Although everything I wrote was incorrect and had to be deleted, I was able to make progress because I did something and was forced to begin decomposing the problem and thinking through it. This allowed me to fail fast, identify what didn’t work, and find a solution instead of trying to avoid making mistakes from the start.

# Results & Goals
### What I learned
With this project I learned multiple design patterns:
	- Read pump / Write pump: for handling multiple asynchronous, bidirectional data streams
    - Hub-and-Spoke: central registry for connected clients
    - Observer:  notifies dependents of state changes
    - Actor model: manage the data state and update when signaled

All of these patterns sit on Go’s “Communicating Sequential Processes” concurrency model.

In addition to the patterns, I was able to learn and get an appreciation for the Go programming language itself.
### How do I know I have learned it
Although I don’t believe I could sit down and write any of these patterns off the top of my head, I do think I gained an awareness, and know what tool to reach for to solve the problems they’ve been developed to solve.

While I don’t consider myself a Go expert, I’m much more comfortable reading Go code today than I was 10 weeks ago. As the project progressed I found myself Googling less and less when I encountered a problem.

# Goals
-   A WebSocket server running and accepting incoming connections from a client
  	**Yes:** The server can accept multiple connections from different clients.
    <br>
-   The client and server exchange messages bidirectionally — the client can send to the server and the server can push to the client without being asked
     **Yes:** Yes messages can be sent bidirectionally from client to client via the server.
    <br>
-   The server manages multiple simultaneous client connections independently, routes messages to specific clients, and handles disconnection gracefully
	**Yes:** The server can manage multiple client connections independently.
	<br>
-   The server hosts a game instance with a complete state model — player boards, piece placement, turn order, and win condition detection
    **Yes:** The server fully owns the game state and play.
  	<br>
-   Player actions submitted by clients are received by the server, validated against game rules, applied to the game state, and the resulting state is pushed to the appropriate clients
  	**Yes:** Server is able to process the player inputs and updates state to clients.
-   Two human players can connect, complete a full game from the placement phase through a win condition, and disconnect cleanly
	**Partial:** The server can fully manage a game, however, I was not able to fully implement a client application so the only inputs that can be sent to and from clients are JSON messages.

### Overall assessment
*The project will be considered complete once two players are able to open an application, play a game to completion, and leave the game with a winner decided.*

By the assessment presented in my proposal the project was not successful. Although I was able to implement a working game server that can handle multiple connections and games concurrently, I was unable to complete the client application that would allow users to play the game in a human-friendly manner. All testing was done by sending JSON messages on the command line from multiple systems.

## Discussion & Reflection
I achieved the goals related to building the server-side architecture, but my ultimate objective was to create a fully functional turn-based online game, which I couldn’t accomplish.


I’m conflicted about the project’s outcomes. I believe I gained valuable and relevant skills during its development, but I didn’t achieve my intended goal. Although I can provide reasons for my failure, such as losing over two weeks to other commitments, that only explains it. The critical mistake was attempting to do too much. Instead of developing a simple chat web application to show off the server-side components, I opted for a graphical desktop application in a language I had no prior experience with.


However, this setback presents an opportunity to resume the project and complete it in full with reduced time constraints.

## Conclusion
Looking back, I realize how much I’ve learned since entering the program. Where I would have had no idea on how to even begin working on a project like this, but now I was able to jump in and have \*something\* to show after a few hours of work. 



Although things are challenging at the moment, the project helped to confirm my choice to pursue a new career in my 40s. Although there were four-letter words at times, at no point did I not want to work through the problems encountered along the way and genuinely enjoyed the challenging aspects of the project.

## References

#### Primary Language and Framework Documentation
##### Go
- **The Go Programming Language Specification** — <https://go.dev/ref/spec>
- **Effective Go** — <https://go.dev/doc/effective_go>
- **gorilla/websocket** — <https://pkg.go.dev/github.com/gorilla/websocket>

##### Swift + SpriteKit + UIKit

- **The Swift Programming Language**— <https://docs.swift.org/swift-book/>
- **SpriteKit Documentation**- <https://developer.apple.com/documentation/spritekit>
- **UIKit Documentation**- <https://developer.apple.com/documentation/uikit>


#### Courses and interactive references

- **Go Web Examples** — <https://gowebexamples.com/>
- **Go by Example** — <https://gobyexample.com/>
- **Go Official Documentation** — <https://go.dev/doc/>
- **Programming with Google Go Specialization** (University of California, Irvine
  via Coursera) — <https://www.coursera.org/specializations/google-golang>
- **Hacking with Swift — 100 Days of Swift** — <https://www.hackingwithswift.com/100>
<br>