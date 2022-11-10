import Button from "./Button";

const HomeSection = ({ subtitle, step1, step2, step3, onTryNowClick}) => {
    return (
        <>
            <div className={"section1"}>
                <div>
                    <h3>{subtitle}</h3>
                    <p>{step1}</p>
                    <p>{step2}</p>
                    <p>{step3}</p>
                </div>
                <Button variant={"primary"} label={"Try Now"} onClick={onTryNowClick}/>
            </div>
        </>
    );
}

export default HomeSection;
