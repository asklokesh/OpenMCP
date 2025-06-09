# Contributing to OpenMCP

Thank you for your interest in contributing to OpenMCP! We welcome contributions from the community and are grateful for any help you can provide.

## How to Contribute

### Reporting Issues

- Check if the issue already exists in our [issue tracker](https://github.com/asklokesh/OpenMCP/issues)
- Create a new issue with a clear title and description
- Include steps to reproduce the problem if applicable
- Add relevant labels to your issue

### Submitting Pull Requests

1. Fork the repository
2. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them with clear messages
4. Write or update tests as needed
5. Ensure all tests pass:
   ```bash
   npm test
   ```
6. Push your branch and create a pull request

### Code Style

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Add comments for complex logic
- Keep components small and focused

### Adding New MCP Servers

To add a new MCP server to the marketplace:

1. Use the submission form at `/submit`
2. Or add it directly to `lib/data/servers.ts`
3. Ensure all required fields are filled
4. Test that the server appears correctly

### Development Guidelines

- Write tests for new features
- Keep accessibility in mind
- Optimize for performance
- Follow React best practices
- Use semantic HTML

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive criticism
- Respect differing opinions

## Questions?

Feel free to open an issue or reach out if you have any questions about contributing.

Thank you for helping make OpenMCP better!