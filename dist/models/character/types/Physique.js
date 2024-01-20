"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sex = exports.Size = exports.Fitness = void 0;
var Fitness;
(function (Fitness) {
    Fitness["FRAIL"] = "Frail";
    Fitness["MODERATE"] = "Moderate";
    Fitness["ROBUST"] = "Robust";
    Fitness["ATHLETIC"] = "Athletic";
    Fitness["PEAK"] = "Peak";
})(Fitness || (exports.Fitness = Fitness = {}));
var Size;
(function (Size) {
    Size["SEVERELY_OBESE"] = "Severely Obese";
    Size["OBESE"] = "Obese";
    Size["OVERWEIGHT"] = "Overweight";
    Size["NORMAL_WEIGHT"] = "Normal Weight";
    Size["SLIM"] = "Slim";
})(Size || (exports.Size = Size = {}));
var Sex;
(function (Sex) {
    Sex["MALE"] = "Male";
    Sex["FEMALE"] = "Female";
})(Sex || (exports.Sex = Sex = {}));
