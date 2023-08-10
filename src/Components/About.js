export function About() {
    return(
        <div className="about">
          <div className="about__project">
            <h5>About the Project</h5>
            <p>This is an event organization platform. Anyone interacting with this application can view, authenticate self and publish events. It has three user roles being: User, Organizer and Administrator. Technologies applied include: Python(The Flask framework) for an API backend service(deployed separately) and React for the front-end. User Interface design embraces responsiveness and minimalism displaying essential elements in simple forms.</p>
          </div>

          <div className="about__team">
            <h5>The Team</h5>
            <p>Project assembled by <strong>Veronica Wambui Wanjiku</strong> for the ALX solftware engineering programme.</p>
            <img src="" alt="" />
          </div>
        </div>
    )
}