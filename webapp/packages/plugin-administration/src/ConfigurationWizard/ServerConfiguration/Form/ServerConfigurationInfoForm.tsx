
/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2021 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { observer } from 'mobx-react-lite';
import styled from 'reshadow';

import { Group, GroupTitle, BASE_CONTAINERS_STYLES, InputFieldNew } from '@cloudbeaver/core-blocks';
import { useTranslate } from '@cloudbeaver/core-localization';
import type { ServerConfigInput } from '@cloudbeaver/core-sdk';
import { useStyles } from '@cloudbeaver/core-theming';

interface Props {
  serverConfig: ServerConfigInput;
}

export const ServerConfigurationInfoForm: React.FC<Props> = observer(function ServerConfigurationInfoForm({
  serverConfig,
}) {
  const translate = useTranslate();
  return styled(useStyles(BASE_CONTAINERS_STYLES))(
    <Group form gap medium>
      <GroupTitle>{translate('administration_configuration_wizard_configuration_server_info')}</GroupTitle>
      <InputFieldNew
        type="text"
        name="serverName"
        state={serverConfig}
        mod='surface'
        required
        tiny
      >
        {translate('administration_configuration_wizard_configuration_server_name')}
      </InputFieldNew>
      <InputFieldNew
        type="number"
        name="sessionExpireTime"
        state={serverConfig}
        mod='surface'
        required
        tiny
      >
        {translate('administration_configuration_wizard_configuration_server_session_lifetime')}
      </InputFieldNew>
    </Group>
  );
});
