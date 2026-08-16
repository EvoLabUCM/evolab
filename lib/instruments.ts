export interface Instrument {
  id: string
  name: string
  /** Short classification shown under the name. */
  kind: string
  /** Mono spec rows rendered as a definition list on the card. */
  specs: readonly { label: string; value: string }[]
  description: string
  media:
    | { type: "image"; src: string }
    | { type: "video"; src: string }
}

/**
 * The hardware the lab runs studies on. Media is served from the lab's
 * existing asset host; specs describe the platform class rather than any
 * particular configuration.
 */
export const instruments: readonly Instrument[] = [
  {
    id: "ameca",
    name: "Ameca",
    kind: "Humanoid robot",
    specs: [
      { label: "Platform", value: "Engineered Arts" },
      { label: "Features", value: "Facial expression range, Face finding gaze, Speech" },
    ],
    description:
      "Our most expressive (and expensive) interaction platform. Ameca's face, gaze, and snappy conversational skills give participants a genuine social partner. Ameca remains as a state-of-the-art humanoid robot.",
    media: {
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ameca%20Humanoid%20Robot%20AI%20Platform-w6ggiGZO8cCV74LJAppMeNb8Z0OErW.mp4",
    },
  },
  {
    id: "robothespian",
    name: "RoboThespian",
    kind: "Humanoid robot",
    specs: [
      { label: "Platform", value: "Engineered Arts" },
      { label: "Features", value: "Gestures, Speech" },
    ],
    description:
      "Ameca's predecessor; A full-size programmable humanoid with a variety of ways to present itself. RT's face allows for projected images — letting the robot assume different personas.",
    media: {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Robothespian.jpg-eghah1Y56TNcVtaX2MJecyTUpnwsbx.jpeg",
    },
  },
  {
    id: "bunker",
    name: "Bunker",
    kind: "All-terrain robot",
    specs: [
      { label: "Platform", value: "AgileX Robotics" },
      { label: "Features", value: "Tracked locomotion, Rugged" },
    ],
    description:
      "A tracked UGV that may not close to humanoid compared to our other robots, but has the ability to traverse a variety of terrain (including water!).",
    media: {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bunker.jpg-ms2SkB23AjOS7kqbIKRXVJ1lxlJJqv.jpeg",
    },
  },
  {
    id: "unitree-go-2",
    name: "Unitree Go 2",
    kind: "Quadruped robot",
    specs: [
      { label: "Platform", value: "Unitree Robotics" },
      { label: "Features", value: "Legged locomotion, Emotes & tricks" },
    ],
    description:
      "A 4-legged dog robot for interaction on the move. With the Go2, we get to observe a participant's interaction with an agent that is neither humanoid nor obviously a vehicle, but something more inherently friendly.",
    media: {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Unitree%20Go%202.jpg-Qm9g027gdpfmiSRg2ywuJXBVIBfMTE.jpeg",
    },
  },
  {
    id: "fnirs",
    name: "fNIRS Cap",
    kind: "Functional neuroimaging",
    specs: [
      { label: "Platform", value: "NIRx" },
      { label: "Features", value: "Functional near-infrared spectroscopy" },
    ],
    description:
      "Functional near-infrared spectroscopy lets us record cortical activity while a participant is up, moving, and interacting — capturing what the brain is doing at a decision's moment.",
    media: {
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FNir%20Cap.jpg-Wg80HaqSAeoAHp5xVTEgGrZoYI4Bpk.jpeg",
    },
  },
] as const
