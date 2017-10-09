import * as b from 'bobril';
import * as Map from '.././components/GoogleMap/lib';

export const contactPage = b.createVirtualComponent({
    id: 'constactPage',
    init() {
        console.log('init');
    },
    render(_ctx: b.IBobrilCtx, me: b.IBobrilNode): void {
        
        let map = Map.create(
            {
                apiKey: 'AIzaSyAGo4HE3j_HjuL64-CoBgS-GVwCbR_UWGc',
                center: { lat: 49.730125, lng: 13.373137 },
                zoom: 17,
                marker: { position: { lat: 49.730, lng: 13.373 } }
            }
        );
        me.children = map;
    }
})