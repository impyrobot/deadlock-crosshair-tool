import CrosshairPreset from "./CrosshairPreset";
import Crosshair from "../models/crosshair";

export default function EditorPresets({ handlePresetSelect }) {
    const presets = [

        new Crosshair({
            isShotgun: false,
            dotOpacity: 1,
            dotBorderOpacity: 0,
            linesBorder: false,
            linesWidth: 2,
            linesHeight: 6,
            linesGap: -4,
        }),

        new Crosshair({
            isShotgun: false,
            dotOpacity: 0,
            dotBorderOpacity: 0,
            linesBorder: false,
            linesWidth: 2,
            linesHeight: 6,
            linesGap: -3,
        }),

        new Crosshair({ isShotgun: false, linesOpacity: 0 }),

        new Crosshair({
            colorB: 255,
            colorG: 255,
            colorR: 0,
            isShotgun: false,
            dotOpacity: 0,
            dotBorderOpacity: 0,
            linesBorder: true,
            linesWidth: 4,
            linesHeight: 8,
            linesGap: -2,
        }),

        new Crosshair({
            isShotgun: false,
            dotOpacity: 1,
            dotBorderOpacity: 0,
            linesBorder: false,
            linesWidth: 2,
            linesHeight: 6,
            linesGap: -2,
        }),




        new Crosshair({isShotgun: false}),
        new Crosshair({ isShotgun: false, dotOpacity: 0 }),
        new Crosshair({ isShotgun: false, dotBorderOpacity: 0 }),
        new Crosshair({ isShotgun: false, dotOpacity: 0, dotBorderOpacity: 0 }),
        new Crosshair({ isShotgun: false, dotOpacity: 0, dotBorderOpacity: 0, linesBorder: false }),
        new Crosshair({ isShotgun: false, dotOpacity: 0, dotBorderOpacity: 0, linesGap: -4 }),
        new Crosshair({
            isShotgun: false,
            dotOpacity: 0,
            dotBorderOpacity: 0,
            linesBorder: false,
            linesGap: -4,
        }),
        new Crosshair({
            isShotgun: false,
            dotOpacity: 0,
            dotBorderOpacity: 0,
            linesBorder: false,
            linesWidth: 10,
            linesHeight: 2,
            linesGap: -1,
        }),
        
        new Crosshair({ lisShotgun: false, inesOpacity: 0, dotOpacity: 0 }),
        new Crosshair({ isShotgun: false, linesOpacity: 0, dotBorderOpacity: 0 }),
    ];

    return (
        <div>
            <div className="text-2xl mb-4">Presets</div>
            <div className="flex flex-wrap gap-3">
                {presets.map((preset, i) => (
                    <CrosshairPreset
                        key={i}
                        crosshair={preset}
                        handleSelect={handlePresetSelect}
                    />
                ))}
            </div>
        </div>
    );
}
