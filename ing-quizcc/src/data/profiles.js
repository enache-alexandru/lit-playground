import { html } from 'lit';

const profiles = {
  good: {
    title: "Sunteți prieteni la cataramă",
    text: "Felicitări! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "happy",
    note: "Răspunsul corect este varianta c la toate intrebările",
  },
  satisfactory: {
    title: "Sunteți amici",
    text: html`Ești pe drumul cel bun! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    img: "resonable",
    note: "Răspunsul corect este varianta c la toate intrebările",
  },
  bad: {
    title: "Abia vă cunoașteți",
    text: html`Mai ai de învățat! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    img: "meh",
    note: "Răspunsul corect este varianta c la toate intrebările",
  }
}

export default profiles;