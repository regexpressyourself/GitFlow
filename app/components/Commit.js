import React             from 'react';
import Terms             from './Terms';
import TermsDescription  from './TermsDescription';
import FlowHeader        from './FlowHeader';
import NextStepContainer from './NextStepContainer';

class Commit extends React.Component {
    // The commit step of the flowchart

    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            isViewed: true
        }
        this.onNextStep = this.onNextStep.bind(this);
    }

    componentDidMount() {
        this.setState({
            onNextStep: this.props.onNextStep,
            isActive:   this.props.isActive
        });
    }

    onNextStep() {
        this.setState({
            isActive: false
        });
        this.state.onNextStep("checkoutmaster");
    }

    render() {
        return (
            <div>
                <FlowHeader isViewed={this.state.isViewed}>
                    Git Commit
                    <Terms isCode="true" term="git commit" >
                        Commits staged changes and prompts for message
                    </Terms>
                    <Terms isCode="true" term='git commit -m "<message>"' >
                        Commits staged changes and add the message: <kbd>{"<"}message{">"}</kbd>
                    </Terms>
                </FlowHeader>
                <TermsDescription>
                    Once you've staged some changes to be saved, it's time for the second step in saving: commiting.
                    <br/><br/>
                    Every commit is accompanied by a message describing the changes that were made. Generally, the more often you commit the better, as it allows commits to be more specific.
                    <br/><br/>
                    Commit your staged changes and add a message all at once by running:
                    <kbd className="is-command">
                        git commit -m "Your message here"
                    </kbd>
                    Alternatively, you can just commit and let git prompt you for a message in your default editor by skipping the message and running only:
                    <kbd className="is-command">
                        git commit
                    </kbd>
                </TermsDescription>

                <NextStepContainer isActive={this.state.isActive}
                                   clickFunction={this.onNextStep.bind(this)}>
                            Combine my changes into the master branch
                </NextStepContainer>
            </div>
        )
    }
}

export default Commit;
