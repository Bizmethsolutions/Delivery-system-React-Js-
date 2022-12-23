import React, { PureComponent } from "react";
import './styles.scss';
import { ActionButton } from '@fluentui/react/lib/Button';
import { SearchBox, ISearchBoxStyles } from '@fluentui/react/lib/SearchBox';
import { withRouter } from "../../config/index.js"
import { Icon } from '@fluentui/react/lib/Icon';
import { IIconProps } from '@fluentui/react';
import { Checkbox } from '@fluentui/react/lib/Checkbox';
import { Label } from '@fluentui/react/lib/Label';
import { IPersonaProps, IPersonaSharedProps, Persona, PersonaSize, PersonaPresence } from '@fluentui/react/lib/Persona';
import { Stack } from '@fluentui/react/lib/Stack';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import {
  provideFluentDesignSystem,
  fluentTab,
  fluentTabPanel,
  fluentTabs
} from "@fluentui/web-components";
const customCoinClass = mergeStyles({
  borderRadius: 0,
  display: 'block',
});
provideFluentDesignSystem()
    .register(
        fluentTab(),
        fluentTabPanel(),
        fluentTabs()
    );

const examplePersona: IPersonaSharedProps = {
  imageInitials: 'TR',
  text: 'Rfx ID: 123 Refecence No: C124',
  secondaryText: 'New Pavement and construction',
  optionalText: 'New Pavement and construction',
};


const addIcon: IIconProps = { iconName: 'Add', className: 'icon-black' };
const filterIcon: IIconProps = { iconName: 'Filter', className: 'icon-black' };
const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { width: 'auto' } };

function _onRenderCoin(props: IPersonaProps): JSX.Element {
  const { coinSize, imageAlt, imageUrl } = props;
  return <img src={imageUrl} alt={imageAlt} width={coinSize} height={coinSize} className={customCoinClass} />;
}
class Dashboard extends PureComponent{
   constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      error: "",
      activeid: "tenderinfo"
    }
  }

  componentDidMount = async() => {
   
  }

  
  onTabSelect = (event) => {
    console.log(event.target.id);
    this.setState({activeid: event.target.id})
  };

  render() {
    const { error } = this.state;
    console.log(this.state.activeid)
    return (
      // <div classNameName="row">
      //   <div classNameName="col-sm-3">
      //     <div>
      //       <ActionButton iconProps={IconTest} allowDisabledFocus disabled={this.props.disabled} checked={this.props.checked}>
      //         <Icon iconName="Add" /> Add a New Tender
      //       </ActionButton>
      //       <ActionButton iconProps={IconTest} allowDisabledFocus disabled={this.props.disabled} checked={this.props.checked}>
      //         <Icon iconName="Filter" />Filter
      //       </ActionButton>
      //     </div>
      //   </div>
      //   <div classNameName="col-sm-9">
      //   hrtryyyyyyyyyy
      //   </div>
      // </div>
      <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg3">
          <div className="br-btm">
            <ActionButton className="ms-action-btn" iconProps={addIcon} allowDisabledFocus disabled={this.props.disabled} checked={this.props.checked}>
              Add a New Tender
            </ActionButton>
            <ActionButton className="ms-action-btn" iconProps={filterIcon} allowDisabledFocus disabled={this.props.disabled} checked={this.props.checked}>
              Filter
            </ActionButton>
          </div>
          <SearchBox
              styles={searchBoxStyles}
              placeholder="Find"
              onEscape={ev => {
                console.log('Custom onEscape Called');
              }}
              onClear={ev => {
                console.log('Custom onClear Called');
              }}
              onChange={(_, newValue) => console.log('SearchBox onChange fired: ' + newValue)}
              onSearch={newValue => console.log('SearchBox onSearch fired: ' + newValue)}
            />
            <Label className="label-tenders">Subcribed Tenders</Label>
            <Stack tokens={{ childrenGap: 10 }}>
            <Persona
              {...examplePersona}
              size={PersonaSize.size42}
              className="ms-fontSize-14"
              //presence={PersonaPresence.online}
              onRenderCoin={_onRenderCoin}
              imageAlt="Ted Randall, status is available at 4 PM"
              imageUrl="https://picsum.photos/200"
              coinSize={42}
            />
            <Persona
              {...examplePersona}
              size={PersonaSize.size42}
              className="ms-fontSize-14"
              //presence={PersonaPresence.online}
              onRenderCoin={_onRenderCoin}
              imageAlt="Ted Randall, status is available at 4 PM"
              imageUrl="https://picsum.photos/200"
              coinSize={42}
            />
            <Persona
              {...examplePersona}
              size={PersonaSize.size42}
              className="ms-fontSize-14"
              //presence={PersonaPresence.online}
              onRenderCoin={_onRenderCoin}
              imageAlt="Ted Randall, status is available at 4 PM"
              imageUrl="https://picsum.photos/200"
              coinSize={42}
            />
          </Stack>
        </div>
        <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg9">
            <fluent-tabs activeid={this.state.activeid} activeindicator={false}>
            <fluent-tab id="tenderinfo" class={this.state.activeid === "tenderinfo" ? "tabs-header-active tabs-header" : "tabs-header"} onClick={this.onTabSelect.bind(this)}>Tender Information</fluent-tab>
            <fluent-tab id="addendum" class={this.state.activeid === "addendum" ? "tabs-header-active tabs-header" : "tabs-header"} onClick={this.onTabSelect.bind(this)}>Addendum</fluent-tab>
            <fluent-tab id="tenderquery" class={this.state.activeid === "tenderquery" ? "tabs-header-active tabs-header" : "tabs-header"} onClick={this.onTabSelect.bind(this)}>Tender Queries</fluent-tab>
            <fluent-tab id="rfxoutcome" class={this.state.activeid === "rfxoutcome" ? "tabs-header-active tabs-header" : "tabs-header"} onClick={this.onTabSelect.bind(this)}>Rfx Outcome</fluent-tab>
            <fluent-tab-panel id="tenderinfoPanel" class={this.state.activeid !== "tenderinfo"? 'hide' : 'show'}>
               
            </fluent-tab-panel>
            <fluent-tab-panel id="addendumPanel" class={this.state.activeid !== "addendum" ? 'hide' : 'show'}>
                
            </fluent-tab-panel>
            <fluent-tab-panel id="tenderqueryPanel" class={this.state.activeid !== "tenderquery" ? 'hide' : 'show'}>
               
            </fluent-tab-panel>
            <fluent-tab-panel id="rfxoutcomePanel" class={this.state.activeid !== "rfxoutcome" ? 'hide' : 'show'}>
               
            </fluent-tab-panel>
        </fluent-tabs>
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(Dashboard)