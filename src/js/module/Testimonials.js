import { dataFromServerFunc } from "../../api/api.js";

const testimonialsName = document.getElementsByClassName("testimonials__name");
const testimonialsJob = document.getElementsByClassName("testimonials__job");
const testimonialsText = document.getElementsByClassName("testimonials__text");

const dataFromServer = await dataFromServerFunc();
const dataTestimonials = dataFromServer.testimonials;

export function Testimonials() {
  for (let i = 0; i < dataTestimonials.length; i++) {
    testimonialsName[i].textContent = dataTestimonials[i].name;
    testimonialsJob[i].textContent = dataTestimonials[i].job;
    testimonialsText[i].textContent = dataTestimonials[i].text;
  }
}
