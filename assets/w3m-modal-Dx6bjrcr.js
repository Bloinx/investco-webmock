import{bA as U,bB as I,bC as y,bD as i,bE as r,bF as k,bG as C,bH as u,bI as T,bJ as h,bK as N,ai as L,af as O,bL as K,bM as R,bN as z,bO as P,bP as p,ak as M,bQ as $}from"./index-C6qY-UsI.js";const W=U`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  :host(.embedded) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host(.embedded) wui-card {
    max-width: 400px;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: var(--local-border-bottom-mobile-radius);
      border-bottom-right-radius: var(--local-border-bottom-mobile-radius);
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var l=function(m,e,t,a){var o=arguments.length,s=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(m,e,t,a);else for(var c=m.length-1;c>=0;c--)(d=m[c])&&(s=(o<3?d(s):o>3?d(e,t,s):d(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};const x="scroll-lock";let n=class extends I{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=y.state.enableEmbedded,this.open=i.state.open,this.caipAddress=r.state.activeCaipAddress,this.caipNetwork=r.state.activeCaipNetwork,this.shake=i.state.shake,this.initializeTheming(),k.prefetchAnalyticsConfig(),this.unsubscribe.push(i.subscribeKey("open",e=>e?this.onOpen():this.onClose()),i.subscribeKey("shake",e=>this.shake=e),r.subscribeKey("activeCaipNetwork",e=>this.onNewNetwork(e)),r.subscribeKey("activeCaipAddress",e=>this.onNewAddress(e)),y.subscribeKey("enableEmbedded",e=>this.enableEmbedded=e))}firstUpdated(){var e,t;if(C.fetchNetworkImage((t=(e=this.caipNetwork)==null?void 0:e.assets)==null?void 0:t.imageId),this.caipAddress){if(this.enableEmbedded){i.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.style.cssText=`
      --local-border-bottom-mobile-radius: ${this.enableEmbedded?"clamp(0px, var(--wui-border-radius-l), 44px)":"0px"};
    `,this.enableEmbedded?u`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?u`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return u` <wui-card
      shake="${this.shake}"
      data-embedded="${T(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){e.target===e.currentTarget&&await this.handleClose()}async handleClose(){h.state.view==="UnsupportedChain"||await N.isSIWXCloseDisabled()?i.shake():i.close()}initializeTheming(){const{themeVariables:e,themeMode:t}=$.state,a=L.getColorTheme(t);O(e,a)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),K.hide(),this.onRemoveKeyboardListener()}onOpen(){this.prefetch(),this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=x,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${x}"]`);e&&e.remove()}onAddKeyboardListener(){var t;this.abortController=new AbortController;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-card");e==null||e.focus(),window.addEventListener("keydown",a=>{if(a.key==="Escape")this.handleClose();else if(a.key==="Tab"){const{tagName:o}=a.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&(e==null||e.focus())}},this.abortController)}onRemoveKeyboardListener(){var e;(e=this.abortController)==null||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=r.state.isSwitchingNamespace,a=R.getPlainAddress(e);!a&&!t?i.close():t&&a&&h.goBack(),await N.initializeIfEnabled(),this.caipAddress=e,r.setIsSwitchingNamespace(!1)}onNewNetwork(e){var w,b,f,g,v;C.fetchNetworkImage((w=e==null?void 0:e.assets)==null?void 0:w.imageId);const t=(f=(b=this.caipNetwork)==null?void 0:b.caipNetworkId)==null?void 0:f.toString(),a=(g=e==null?void 0:e.caipNetworkId)==null?void 0:g.toString(),o=t&&a&&t!==a,s=r.state.isSwitchingNamespace,d=((v=this.caipNetwork)==null?void 0:v.name)===z.UNSUPPORTED_NETWORK_NAME,c=h.state.view==="ConnectingExternal",S=!this.caipAddress,E=o&&!d&&!s,A=h.state.view==="UnsupportedChain";!c&&(S||A||E)&&h.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(this.hasPrefetched=!0,k.prefetch())}};n.styles=W;l([P({type:Boolean})],n.prototype,"enableEmbedded",void 0);l([p()],n.prototype,"open",void 0);l([p()],n.prototype,"caipAddress",void 0);l([p()],n.prototype,"caipNetwork",void 0);l([p()],n.prototype,"shake",void 0);n=l([M("w3m-modal")],n);export{n as W3mModal};
