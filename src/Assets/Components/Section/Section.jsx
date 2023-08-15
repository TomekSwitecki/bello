import React from "react";
import classNames from "classnames";
export function Section(props) {
    const containerClasses = classNames(
        "section__container",
        {
            [`section__container--${props.dir}`]: props.dir,

        }
    );

    const headingClasses = classNames(
        "section__heading",
        {
            [`section__heading--${props.headingDir}`]: props.headingDir,

        }
    );
    return (
        <div id={props.id} className={containerClasses}>
            <div className={headingClasses}>
                <span className={"section__title"}>{props.sectionTitle}</span>
                <span className="section__subtitle">{props.sectionSubtitle}</span>
            </div>
            <div className="section__embedded-content">{props.children}</div>
        </div>
    );
}
