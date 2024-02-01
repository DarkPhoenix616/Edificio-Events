import React from "react";
import EventCard from "../components/eventcard";


export default function Events() {
  return (
    
    <section>
      
      <h1>Edificio 2024</h1>
        
        <h2>Events</h2>
        
        <div class="Eventcards">

        
        
        
            <EventCard
              imgPath={"/events/bridge.png"}
              heading="BRIDGE MAKING"
              content={"Testing Engineering Skills and Encouraging Creativity"}
              linkurl="#"
              Prize = "Prize worth Rs. 4.5k"
            />
            <EventCard
              imgPath={"/events/quiz.png"}
              heading="CIVIQ"
              content={"Test your knowledge and learn more about civil engineering"}
              linkurl="#"
              Prize = "Prize worth Rs. 4.5k"
            />
  
            <EventCard
              imgPath={"/events/cad.png"}
              heading="CADECETTO"
              content={"Online Event Testing Creativity and Drafting Skills using CAD Platforms"}
              linkurl="#"
              Prize = "Prize worth Rs. 4.5k"
            />
            <EventCard
              imgPath={"/events/poster.png"}
              heading="EUREKA"
              content={"Technical Poster Presentation Competition Showcasing Innovations in Civil and Infrastructure Engineering"}
              linkurl="#"
              Prize = "Prize worth Rs. 4.5k"
            />
            <EventCard
              imgPath={"/events/pixivils.png"}
              heading="P I X I V I L S"
              content={"Problem-Solving Competition for Identifying and Solving Civil and Infrastructure Engineering Issues"}
              linkurl="#"
              Prize = "Prize worth Rs. 4.5k"
            />
            <EventCard
              imgPath={"/events/symp.png"}
              heading="SYMPOSIUM"
              content={"Panel Discussion and Guest Talks"}
              linkurl="#"
            />
          
        
        </div>
    </section>
  );
}
