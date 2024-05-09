import { type Plugin } from 'graphql-yoga';
import { stringInterpolator } from '@graphql-mesh/string-interpolation';
import { type MeshPlugin, type MeshPluginOptions } from '@graphql-mesh/types';
import { createEnvelopQueryValidationPlugin } from './graphql-constraint-directive';
import { type ConstraintPluginConfig } from './types';

export default function useConstraint(
    options: MeshPluginOptions<ConstraintPluginConfig>,
): MeshPlugin<any> {
    const enabled =
        typeof options.enabled === 'string'
            ? stringInterpolator.parse(options.enabled, { env: process.env }) === 'true'
            : options.enabled;

    if (!enabled) {
        return {};
    }

    return {
        onPluginInit({ addPlugin }) {
            addPlugin(createEnvelopQueryValidationPlugin() as Plugin);
        },
    };
}
