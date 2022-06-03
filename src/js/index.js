import { NavHeader } from "./module/Header.js";
import { LinkToDownload } from "./module/LinkToDownload.js";
import { Modal } from "./module/Modal.js";
import { Mode } from "./module/Mode.js";
import { Plans } from "./module/Plans.js";
import { Testimonials } from "./module/Testimonials.js";
import { CountDown } from "./module/Timer.js";
import { Validation } from "./module/Validation.js";

import '../css/style.css'

window.onload = () => {
Modal();
Mode();
Validation();
CountDown();
NavHeader();
LinkToDownload();
Testimonials();
Plans();
}
