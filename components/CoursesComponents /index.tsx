
import { HeroCourses } from "./HeroCourses ";
import { KeyPoint } from "./KeyPoint";
import { Lectures } from "./Lectures ";
import { ModalCourses } from "./ModalCourses";


const lectures = [
	"How to init App",
	"How to get a help",
	"Introduction to Solidity",
	"Programing in C++",
	"How to write For Loops",
	"Safe operator",
];

export const CoursesComponents: React.FC = () =>
{
	return (
		<>
			<HeroCourses />
			<KeyPoint />
			<Lectures lectures={ lectures } />
			<ModalCourses />
		</>
	);
};