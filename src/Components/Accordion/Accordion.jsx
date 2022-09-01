import "./Accordion.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const Accordion__util = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion">
      <Accordion
      sx={{backgroundColor: 'transparent', color: '#aaa', borderBottom: '1px solid #555'}}
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon sx={{color: '#aaa'}} />}
        >
          <Typography sx={{fontSize: '1.25rem', color: '#aaa'}}>Is this course for me? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At omnis
          fugit aut molestiae nihil quasi excepturi, ipsum tempora, fuga
          possimus adipisci repellat tempore totam obcaecati perferendis placeat
          dolorum cumque inventore!
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={{backgroundColor: 'transparent', color: '#aaa', borderBottom: '1px solid #555'}}
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon sx={{color: '#aaa'}} />}

        >
          <Typography sx={{fontSize: '1.25rem', color: '#aaa'}}>How should I go through this course? </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At omnis
          fugit aut molestiae nihil quasi excepturi, ipsum tempora, fuga
          possimus adipisci repellat tempore totam obcaecati perferendis placeat
          dolorum cumque inventore!
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={{backgroundColor: 'transparent', color: '#aaa', borderBottom: '1px solid #555'}}
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon sx={{color: '#aaa'}} />}
        >
          <Typography sx={{fontSize: '1.25rem', color: '#aaa'}}>What do i need?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At omnis
          fugit aut molestiae nihil quasi excepturi, ipsum tempora, fuga
          possimus adipisci repellat tempore totam obcaecati perferendis placeat
          dolorum cumque inventore!
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={{backgroundColor: 'transparent', color: '#aaa', borderBottom: '1px solid #555'}}
        expanded={expanded === "panel4"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMoreIcon sx={{color: '#aaa'}} />}

        >
          <Typography sx={{fontSize: '1.25rem', color: '#aaa'}}>How long does it take?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At omnis
          fugit aut molestiae nihil quasi excepturi, ipsum tempora, fuga
          possimus adipisci repellat tempore totam obcaecati perferendis placeat
          dolorum cumque inventore!
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={{backgroundColor: 'transparent', color: '#aaa', borderBottom: '1px solid #555'}}
        expanded={expanded === "panel5"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel5")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel5-content"
          expandIcon={<ExpandMoreIcon sx={{color: '#aaa'}} />}

        >
          <Typography sx={{fontSize: '1.25rem', color: '#aaa'}}>How much does it cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At omnis
          fugit aut molestiae nihil quasi excepturi, ipsum tempora, fuga
          possimus adipisci repellat tempore totam obcaecati perferendis placeat
          dolorum cumque inventore!
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordion__util;
