/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts"/>
import * as b from 'bobril';
import { IData } from './data';
import * as styles from './styles'

export { IData, IMarker, IPosition } from './data';


let scriptLoaded = false;
const mapElementKey = 'map';
const scriptElementKey = 'script';

export const create = b.createVirtualComponent<IData>({

    init(ctx: IContext) {
        ctx.oldDataWatermark = '';
    },


    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            b.style(
                {
                    tag: 'div',
                    ref: [ctx, mapElementKey]
                },
                styles.mapStyle
            ),
            !scriptLoaded && {
                tag: 'script',
                attrs: {
                    src: 'https://maps.googleapis.com/maps/api/js?key=' + ctx.data.apiKey
                },
                ref: [ctx, scriptElementKey]
            }
        ];
    },

    postInitDom(ctx: IContext) {
        setOnLoad(ctx);
        initMap(ctx);
    },
    postUpdateDom(ctx: IContext) {
        setOnLoad(ctx);
        initMap(ctx);
    }
});

function setOnLoad(ctx: IContext) {
    if (scriptLoaded) {
        return;
    }
    let script = <HTMLElement>b.getDomNode(ctx.refs![scriptElementKey]!);
    script.onload = () => {
        scriptLoaded = true;
        b.invalidate(ctx);
    }
}

function initMap(ctx: IContext) {
    let dataWatermark = JSON.stringify(ctx.data);
    if (scriptLoaded && dataWatermark !== ctx.oldDataWatermark) {
        let map = new google.maps.Map(<HTMLElement>b.getDomNode(ctx.refs![mapElementKey]!), {
            zoom: ctx.data.zoom,
            center: ctx.data.center
        });
        new google.maps.Marker({
            position: ctx.data.marker.position,
            map: map
        });
        ctx.oldDataWatermark = dataWatermark;
        return;
    }
}

interface IContext extends b.IBobrilCtx {
    dataUpdated: boolean,
    data: IData,
    oldDataWatermark: string
}