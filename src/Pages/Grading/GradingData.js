import fl from "Assets/Image/Clarity/FL.png";
import i from "Assets/Image/Clarity/I.png";
import si from "Assets/Image/Clarity/SI.png";
import vs from "Assets/Image/Clarity/VS.png";
import vvs from "Assets/Image/Clarity/VVS.png";

import d2f from "Assets/Image/Color/D-F.png";
import g2h from "Assets/Image/Color/G-H.png";
import i2j from "Assets/Image/Color/I-J.png";
import k2m from "Assets/Image/Color/K-M.png";
import n2r from "Assets/Image/Color/N-R.png";
import s2z from "Assets/Image/Color/S-Z.png";
import fancy from "Assets/Image/Color/Fancy.png";

import faint from "Assets/Image/Floro/faint.png";
import medium from "Assets/Image/Floro/medium.png";
import none from "Assets/Image/Floro/none.png";
import strong from "Assets/Image/Floro/strong.png";
import veryStrong from "Assets/Image/Floro/very-strong.png";

// Inclusion Images
import Bearding from "Assets/Image/Inclusion/Bearding.png";
import Cavity from "Assets/Image/Inclusion/Cavity.png";
import Bruise from "Assets/Image/Inclusion/Bruise.png";
import Cloude from "Assets/Image/Inclusion/Cloude.png";
import Crystal from "Assets/Image/Inclusion/Crystal.png";
import Feather from "Assets/Image/Inclusion/Feather.png";
import InternalGraining from "Assets/Image/Inclusion/InternalGraining.png";
import Knots from "Assets/Image/Inclusion/Knots.png";
import LaserDrillHole from "Assets/Image/Inclusion/LaserDrillHole.png";
import Needle from "Assets/Image/Inclusion/Needle.png";
import Pinpoint from "Assets/Image/Inclusion/Pinpoint.png";
import TwinningWisp from "Assets/Image/Inclusion/TwinningWisp.png";

// Inclusion ORG Images
import Bearding_Org from "Assets/Image/Inclusion/Org/bearded.png";
import Cavity_Feather_Org from "Assets/Image/Inclusion/Org/cavity.png";
import Bruise_Org from "Assets/Image/Inclusion/Org/bruises.png";
import Cloud_Org from "Assets/Image/Inclusion/Org/clouds.png";
import Crystal_Org from "Assets/Image/Inclusion/Org/crystals.png";
import Feather_Org from "Assets/Image/Inclusion/Org/feathers.png";
import Internal_Graining_Org from "Assets/Image/Inclusion/Org/grainingInternal.png";
import Knot_Org from "Assets/Image/Inclusion/Org/knots.png";
import Laser_Drill_Hole_Org from "Assets/Image/Inclusion/Org/InternalLaserDrilling.png";
import Needle_Org from "Assets/Image/Inclusion/Org/needles.png";
import Pinpoint_Org from "Assets/Image/Inclusion/Org/pinpoints.png";
import Twinning_Wisp_Org from "Assets/Image/Inclusion/Org/twinningWisps.png";

export const CARAT_RANGES = [
  [
    "0.30 - 0.39",
    "0.40 - 0.49",
    "0.50 - 0.69",
    "0.70 - 0.89",
    "0.90 - 0.99",
    "1.00 - 1.49",
    "1.50 - 1.99",
  ],
  [
    "2.00 - 2.99",
    "3.00 - 3.99",
    "4.00 - 4.99",
    "5.00 - 5.99",
    "6.00 - 6.99",
    "10.00 +",
  ],
];

export const CLARITY = [
  {
    img: fl,
    title: "FL - Flaw Less",
    subtitle: "IF - Internally Flaw Less",
  },
  {
    img: vvs,
    title: "VVS1 / VVS2",
    subtitle: "Very Very Slightly Included",
  },
  {
    img: vs,
    title: "VS1 / VS2",
    subtitle: "Very Slightly Included",
  },
  {
    img: si,
    title: "SI1 / SI2 / SI3",
    subtitle: "Slightly Included",
  },
  {
    img: i,
    title: "I1 / I2 / I3",
    subtitle: "Included",
  },
];

export const COLOR = [
  { img: d2f, title: "D | E | F", subtitle: "Colorless" },
  { img: g2h, title: "G | H", subtitle: "Near Colorless" },
  { img: i2j, title: "I | J", subtitle: "Slightly Tinted" },
  { img: k2m, title: "K | L | M", subtitle: "Faint" },
  { img: n2r, title: "N | O-P | Q-R", subtitle: "Very Light" },
  { img: s2z, title: "S-T | U-V | W-X | Y-Z", subtitle: "Light" },
  { img: fancy, title: "FANCY", subtitle: "Yellow" },
];

export const CUT_DATA = [
  { code: "EX", label: "Excellent Cut" },
  { code: "VG", label: "Very Good Cut" },
  { code: "GD", label: "Good Cut" },
  { code: "F", label: "Fair Cut" },
];

export const POLISH_DATA = [
  { code: "EX", label: "Excellent Polish" },
  { code: "VG", label: "Very Good Polish" },
  { code: "GD", label: "Good Polish" },
  { code: "F", label: "Fair Polish" },
];

export const SYMMETRY_DATA = [
  { code: "EX", label: "Excellent Symmetry" },
  { code: "VG", label: "Very Good Symmetry" },
  { code: "GD", label: "Good Symmetry" },
  { code: "F", label: "Fair Symmetry" },
];

export const FLUORESCENCE_DATA = [
  { code: "NON", label: "None", img: none },
  { code: "FNT", label: "Faint", img: faint },
  { code: "MED", label: "Medium", img: medium },
  { code: "STG", label: "Strong", img: strong },
  { code: "VST", label: "Very Strong", img: veryStrong },
];

export const HEART_ARROW_DATA = ["Excellent", "Very Good", "Good", "None"];

export const LUSTER_DATA = ["EX", "VG", "GD"];
export const LUSTER_LABELS = ["Excellent", "Very Good", "Good"];

export const SHADE_DATA = [
  ["NON", "GREEN", "YELLOW", "PINK", "BLUE"],
  ["BROWN", "GREY", "YELLOW - BROWN", "YELLOW - GREEN", "MIXED"],
];

export const EXTRA_FACET_DATA = ["SM", "MD", "HV", "NONE"];
export const EXTRA_FACET_LABELS = ["Small", "Medium", "Heavy", "None"];

export const WHITE_INCLUSION = [
  {
    type: "Clouds",
    detail:
      "– A cluster of tiny white pinpoint inclusions that create a hazy effect.",
  },
  {
    type: "Feathers",
    detail: "– Internal fractures that appear as white or translucent lines.",
  },
  {
    type: "Needles",
    detail: "– Long, thin white inclusions that resemble tiny rods.",
  },
  {
    type: "Crystals",
    detail: "– White mineral deposits inside the diamond.",
  },
  {
    type: "Graining",
    detail: "– Internal growth patterns that can create a milky appearance.",
  },
];

export const blackInclusionDetail = [
  {
    type: "Black Crystals",
    detail:
      "– Dark mineral deposits, often of minerals like pyrite or graphite, that can be embedded within the diamond.",
  },
  {
    type: "Pinpoints",
    detail:
      "– Very small black inclusions that may appear as tiny dots scattered within the diamond.",
  },
  {
    type: "Black Twinning Wisps",
    detail:
      "– Dark thread-like inclusions formed by the intergrowth of crystal structures in a diamond.",
  },
  {
    type: "Dark Clouds",
    detail:
      "– Clusters of dark inclusions that can create a shadowy or smoky effect within the diamond.",
  },
  {
    type: "Needles",
    detail:
      "– Thin, black, hair-like inclusions that can look similar to black threads.",
  },
  {
    type: "Black Feathers",
    detail:
      "– Fractures or cleavages that appear as dark lines within the stone, often indicating internal stress.",
  },
];

export const INCLUSION_TABLE = [
  ["Table White Inclusion", "Side White Inclusion"],
  ["Table Black Inclusion", "Side Black Inclusion"],
];

export const INCLUSION_CRITERIA = [
  ["None", "ML", "SM", "MD", "LRG"],
  ["None", "Meaningless", "Small", "Medium", "Large"],
];

export const OPEN_INCLUSION = [
  [
    "None",
    "Hair line Open inclusion",
    "Small Open inclusion",
    "Medium Open inclusion",
    "Large Open inclusion",
  ],
];

export const OPEN_INCLUSION_SEPARATION = [
  ["Open on Table", "Open on Crown", "Open on Pavilion", "Open on Girdle"],
];

export const INCLUSIONS = [
  {
    mainImg: Bearding,
    OrgImg: Bearding_Org,
    name: "Bearding",
  },
  {
    mainImg: Cavity,
    OrgImg: Cavity_Feather_Org,
    name: "Cavity",
  },
  {
    mainImg: Bruise,
    OrgImg: Bruise_Org,
    name: "Bruise",
  },
  {
    mainImg: Cloude,
    OrgImg: Cloud_Org,
    name: "Cloude",
  },
  {
    mainImg: Crystal,
    OrgImg: Crystal_Org,
    name: "Crystal",
  },
  {
    mainImg: Feather,
    OrgImg: Feather_Org,
    name: "Feather",
  },
  {
    mainImg: InternalGraining,
    OrgImg: Internal_Graining_Org,
    name: "Internal Graining",
  },
  {
    mainImg: Knots,
    OrgImg: Knot_Org,
    name: "Knots",
  },
  {
    mainImg: LaserDrillHole,
    OrgImg: Laser_Drill_Hole_Org,
    name: "Laser Drill Hole",
  },
  {
    mainImg: Needle,
    OrgImg: Needle_Org,
    name: "Needle",
  },
  {
    mainImg: Pinpoint,
    OrgImg: Pinpoint_Org,
    name: "Pinpoint",
  },
  {
    mainImg: TwinningWisp,
    OrgImg: Twinning_Wisp_Org,
    name: "Twinning Wisps",
  },
];